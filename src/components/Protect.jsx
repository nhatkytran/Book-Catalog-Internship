import { createElement } from 'react';
import { node, bool } from 'prop-types';

import { useUser } from '~/hooks';
import { AuthErrorMessage, AuthLoader } from '~/components';

function Protect({ children, isProtected }) {
  const { isPending, isError, error, data: user } = useUser();

  return createElement(children.type, {
    ...children.props,
    ...(isProtected && {
      ProtectLoader: () => <>{isPending && <AuthLoader />}</>,
      ProtectError: () => <>{isError && <AuthErrorMessage errorMessage={error.message} />}</>,
      isAuthReady: !isPending && !isError,
      user,
    }),
  });
}

Protect.propTypes = {
  children: node.isRequired,
  isProtected: bool.isRequired,
};

export default Protect;
