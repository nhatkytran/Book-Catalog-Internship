import { useState } from 'react';
import styled, { css } from 'styled-components';

import { ButtonMain } from '~/components';
import { BooksForm } from '~/features/books';

/** A component that allows adding new books with the option to add multiple books. */
function BooksAddMore() {
  const [isAddOpened, setIsAddOpened] = useState(false);
  const [isMultipleTimes, setIsMultipleTimes] = useState(false);

  const handleCloseForm = () => {
    setIsMultipleTimes(false);
    setIsAddOpened(false);
  };

  return (
    <StyledBooksAddMore>
      {!isAddOpened && (
        <ButtonMain UI={ButtonMainUI} onClick={() => setIsAddOpened(true)}>
          Add new book
        </ButtonMain>
      )}

      {isAddOpened && (
        <BooksForm
          type="add"
          isMultipleTimes={isMultipleTimes}
          onToggleMultipleTimes={() => setIsMultipleTimes(prev => !prev)}
          onCloseForm={handleCloseForm}
        />
      )}
    </StyledBooksAddMore>
  );
}

const StyledBooksAddMore = styled.div``;

const ButtonMainUI = css``;

export default BooksAddMore;
