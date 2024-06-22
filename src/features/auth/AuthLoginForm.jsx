import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';

import { HeadingUI } from '~/ui';
import { AuthLoginFormRow } from '~/features/auth';
import { ButtonMain, Loader } from '~/components';
import { px500 } from '~/styles/GlobalStyles';
import { useLogin } from '~/hooks';

function AuthLoginForm() {
  const { isPending, mutate } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'nhatky.tran.2002@saritasa.com',
      password: '123123123aa',
    },
  });

  return (
    <StyledAuthLoginForm onSubmit={handleSubmit(mutate)}>
      <HeadingUI as="h1">Log in to your account</HeadingUI>

      <FormUI onSubmit={() => {}}>
        <AuthLoginFormRow
          label="Email address"
          errorMessage={errors?.email?.message}
        >
          <InputUI
            type="email"
            name="email"
            id="email"
            autoComplete="username"
            disabled={false}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
          />
        </AuthLoginFormRow>

        <AuthLoginFormRow
          label="Password"
          errorMessage={errors?.password?.message}
        >
          <InputUI
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            disabled={false}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  'Password must include at least one letter and one number',
              },
            })}
          />
        </AuthLoginFormRow>

        <AuthLoginFormRow>
          <ButtonMain>
            {isPending ? (
              <LoadingBoxUI>
                <Loader UI={LoaderUI} />
              </LoadingBoxUI>
            ) : (
              'Login'
            )}
          </ButtonMain>
        </AuthLoginFormRow>
      </FormUI>
    </StyledAuthLoginForm>
  );
}

const StyledAuthLoginForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 3.6rem;

  @media only screen and (max-width: ${px500}) {
    gap: 3.2rem;
  }
`;

const FormUI = styled.form`
  width: 100%;
  max-width: 48rem;
  background-color: var(--color-neutral-50);
  font-size: 1.4rem;
  padding: 2.4rem 4rem;
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--border-radius-md);
  overflow: hidden;

  @media only screen and (max-width: ${px500}) {
    padding: 2rem 2.4rem;
  }
`;

const InputUI = styled.input`
  background-color: var(--color-neutral-50);
  color: inherit;
  font-family: inherit;
  padding: 0.8rem 1.2rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-neutral-300);

  &:disabled {
    background-color: var(--color-neutral-200);
  }
`;

const LoadingBoxUI = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.425rem;
`;

const LoaderUI = css`
  fill: var(--color-neutral-50);
`;

export default AuthLoginForm;
