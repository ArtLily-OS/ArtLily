import Header from '../Frontend/components/Header';
import Login from '../Frontend/components/Login';

export default function LoginPage() {
  return (
    <>
      <Header
        heading='Login to your account'
        paragraph="Don't have an account yet? "
        linkName='Signup'
        linkUrl='/signup'
      />
      <Login />
    </>
  );
}
