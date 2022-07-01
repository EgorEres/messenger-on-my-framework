export interface LoginPageProps {
  children: {
    name: string;
    type: string;
    inputName: string;
    id: string;
    validation?: RegExp;
    validationText?: string;
    notEmpty?: boolean;
  }[];
  button: string;
  loginButtonText?: string;
  mainError?: string;
}
