import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";

import {
  CONTACT_FORM_MAX_LENGTHS,
  CONTACT_FORM_MIN_LENGTHS,
  DEFAULT_SUBJECT,
  NAME,
} from "@/config/constants";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const emails = {
  sendEmail: defineAction({
    accept: "form",
    input: z.object({
      fullName: z
        .string()
        .min(CONTACT_FORM_MIN_LENGTHS.fullName)
        .max(CONTACT_FORM_MAX_LENGTHS.fullName),
      email: z.email().max(CONTACT_FORM_MAX_LENGTHS.email),
      subject: z.string().max(CONTACT_FORM_MAX_LENGTHS.subject),
      message: z
        .string()
        .min(CONTACT_FORM_MIN_LENGTHS.message)
        .max(CONTACT_FORM_MAX_LENGTHS.message),
    }),
    handler: async (input) => {
      const subject = input.subject || DEFAULT_SUBJECT;

      const { data, error } = await resend.emails.send({
        from: `${NAME} <${import.meta.env.RESEND_FROM_EMAIL}>`,
        to: [import.meta.env.RESEND_TO_EMAIL],
        replyTo: input.email,
        subject,
        text: `Full Name: ${input.fullName}\n\nEmail: ${input.email}\n\nMessage: ${input.message}`,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};
