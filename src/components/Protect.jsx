import { createElement } from 'react';
import { node } from 'prop-types';

import { useUser } from '~/hooks';
import { AuthErrorMessage, AuthLoader } from '~/components';

function Protect({ children }) {
  const { isPending, isError, error, data: user } = useUser();

  const ProtectLoader = () => <>{isPending && <AuthLoader />}</>;

  const ProtectError = () => (
    <>{isError && <AuthErrorMessage errorMessage={error.message} />}</>
  );

  return createElement(children.type, {
    ...children.props,
    ProtectLoader,
    ProtectError,
    user: !isPending && !isError && user ? user : null,
  });
}

Protect.propTypes = { children: node.isRequired };

export default Protect;
