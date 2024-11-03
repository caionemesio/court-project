import UnauthContainer from "../../components/containers/UnauthContainer";
import NotFoundImage from "../../assets/images/not_found_image.jpg";

export default function NotFound() {
  return (
    <UnauthContainer
      title="Página não encontrada"
      subtitle="A página que você está procurando não existe. Por favor volte para página principal."
      imageUrl={NotFoundImage}
    />
  );
}
