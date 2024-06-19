import { useState } from 'react';
import styled, { css } from 'styled-components';

import { ButtonMain } from '~/components';
import { BooksForm } from '~/features/books';

function BooksAddMore() {
  const [isAddOpened, setIsAddOpened] = useState(false);
  const [isMultipleTimes, setIsMultipleTimes] = useState(false);

  const handleToggleMultipleTimes = () => setIsMultipleTimes(prev => !prev);

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
          onToggleMultipleTimes={handleToggleMultipleTimes}
          onCloseForm={handleCloseForm}
        />
      )}
    </StyledBooksAddMore>
  );
}

const StyledBooksAddMore = styled.div``;

const ButtonMainUI = css``;

export default BooksAddMore;
