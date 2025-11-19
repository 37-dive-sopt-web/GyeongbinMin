import { useNavigate } from 'react-router-dom';
import { useSignup } from '../../features/signup';
import { SignupUsernameStep } from '../../features/signup/components/SignupUsernameStep';
import { SignupPasswordStep } from '../../features/signup/components/SignupPasswordStep';
import { SignupInfoStep } from '../../features/signup/components/SignupInfoStep';

export const SignupPage = () => {
  const navigate = useNavigate();
  const {
    step,
    data,
    isLoading,
    validationErrors,
    updateData,
    nextStep,
    prevStep,
    handleSignup,
    canProceedToNextStep,
  } = useSignup();

  const handleBack = () => {
    if (step === 'username') {
      navigate(-1);
    } else {
      prevStep();
    }
  };

  const handleSubmit = async () => {
    const result = await handleSignup();
    if (result?.success) {
      alert(`${result.name}님, 회원가입이 완료되었습니다!`);
      navigate('/login');
    }
  };

  if (step === 'username') {
    return (
      <SignupUsernameStep
        username={data.username}
        validationError={validationErrors.username}
        onUsernameChange={(value) => updateData('username', value)}
        onNext={nextStep}
        onBack={handleBack}
        canProceed={canProceedToNextStep()}
      />
    );
  }

  if (step === 'password') {
    return (
      <SignupPasswordStep
        password={data.password}
        passwordConfirm={data.passwordConfirm}
        passwordError={validationErrors.password}
        passwordConfirmError={validationErrors.passwordConfirm}
        onPasswordChange={(value) => updateData('password', value)}
        onPasswordConfirmChange={(value) => updateData('passwordConfirm', value)}
        onNext={nextStep}
        onBack={handleBack}
        canProceed={canProceedToNextStep()}
      />
    );
  }

  if (step === 'info') {
    return (
      <SignupInfoStep
        name={data.name}
        email={data.email}
        age={data.age}
        onNameChange={(value) => updateData('name', value)}
        onEmailChange={(value) => updateData('email', value)}
        onAgeChange={(value) => updateData('age', value)}
        onSubmit={handleSubmit}
        onBack={handleBack}
        isLoading={isLoading}
      />
    );
  }

  return null;
};

