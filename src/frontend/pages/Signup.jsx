import Header from '../Frontend/components/Header';
import Signup from '../Frontend/components/Signup';

export default function SignupPage() {
  return (
    <>
      <Header
        heading='Signup to create an account'
        paragraph='Already have an account? '
        linkName='Login'
        linkUrl='/'
      />
      <Signup />
    </>
  );
}
