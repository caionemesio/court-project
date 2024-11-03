import AccessDeniedImage from "../../assets/images/access_denied.png";
import UnauthContainer from "../../components/containers/UnauthContainer";

export default function AccessDenied() {
  return (
    <UnauthContainer
      imageUrl={AccessDeniedImage}
      title="Acesso negado"
      subtitle="Você não tem permissão para acessar esta página. Por favor volte para página principal."
    />
  );
}
