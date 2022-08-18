import { alertMessage } from 'helpers/alertMessage';

export function handleFirebaseError(err) {
  let errorCode = err.code;
  let errorMessage = err.message;
  if (errorCode == "auth/email-already-exists") {
    errorMessage = "O email informado já está registrado."
  }else if (errorCode == "auth/invalid-password") {
    errorMessage = "A senha informada é inválida."
  }

  alertMessage("Ops", errorMessage)
}
