import { SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form>
      <FieldGroup>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fullName" required>
                Full Name
              </FieldLabel>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name..."
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email" required>
                Email
              </FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email..."
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="subject">Subject</FieldLabel>
              <Input
                id="subject"
                type="text"
                placeholder="Enter the subject..."
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="message" required>
                Message
              </FieldLabel>
              <Textarea
                id="message"
                placeholder="Enter your message..."
                required
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Field orientation="horizontal">
          <Button type="submit">
            <SendIcon />
            <span>Send message</span>
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
