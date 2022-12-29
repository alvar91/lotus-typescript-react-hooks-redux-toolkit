import Button from "../components/Button";
import Layout from "../components/Layout";

interface ErrorPagePropsI {
  errorInfo?: string;
  clearState: () => void;
}

const ErrorPage = ({ errorInfo, clearState }: ErrorPagePropsI) => {
  const reloadPage = () => {
    clearState();
    window.location.reload();
  };

  return (
    <Layout>
      <h2>{errorInfo ? errorInfo : "Извините, что-то пошло не так"}</h2>
      <Button onClick={() => reloadPage()}>Перезагрузить страницу</Button>
    </Layout>
  );
};

export default ErrorPage;
