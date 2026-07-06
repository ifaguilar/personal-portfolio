interface ImportMetaEnv {
  readonly PUBLIC_CONTACT_EMAIL: string;
  readonly PUBLIC_GITHUB_URL: string;
  readonly PUBLIC_LINKEDIN_URL: string;
  readonly RESEND_API_KEY: string;
  readonly RESEND_FROM_EMAIL: string;
  readonly RESEND_TO_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
