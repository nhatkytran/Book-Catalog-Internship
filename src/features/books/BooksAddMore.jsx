import { useState } from 'react';
import styled, { css } from 'styled-components';

import { ButtonMain } from '~/components';
import { BooksForm } from '~/features/books';

function BooksAddMore() {
  const [isAddOpened, setIsAddOpened] = useState(true);

  return (
    <StyledBooksAddMore>
      {!isAddOpened && (
        <ButtonMain UI={ButtonMainUI} onClick={() => setIsAddOpened(true)}>
          Add new book
        </ButtonMain>
      )}

      {isAddOpened && (
        <BooksForm type="add" onCloseForm={() => setIsAddOpened(false)} />
      )}
    </StyledBooksAddMore>
  );
}

const StyledBooksAddMore = styled.div``;

const ButtonMainUI = css``;

export default BooksAddMore;
