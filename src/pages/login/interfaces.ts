export interface LoginPageProps {
  children: {
    name: string;
    type: string;
    inputName: string;
    id: string;
    validation: RegExp;
    validationText: string;
  }[];
  button: string;
  loginButtonText?: string;
  mainError?: string;
}
