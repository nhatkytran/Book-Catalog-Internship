import { useCallback, useEffect, useRef } from 'react';
import useWindowEventListener from './useWindowEventListener';

function useDragItems({
  itemsClassName,
  itemsLength,
  itemsGap,
  lineClassName,
  lineProgressClassName,
}) {
  const containerRef = useRef(null);
  const isReadyToDragRef = useRef(false);
  const startClientXRef = useRef(null);
  const newClientXRef = useRef(null);
  const translateXRef = useRef(0);
  const lineIndexRef = useRef(0);

  const getBookItemWidth = useCallback(() => {
    const bookItem = document.querySelector(`.${itemsClassName}`);
    return bookItem.getBoundingClientRect().width;
  }, [itemsClassName]);

  const booksTranslateX = useCallback(
    translateX =>
      document
        .querySelectorAll(`.${itemsClassName}`)
        .forEach(book => (book.style.transform = `translateX(${translateX})`)),
    [itemsClassName]
  );

  // We call SortedBooksMobile more than one times based on the number of books
  // so sometimes we can see many resize handlers run
  // distinguish using itemsClassName
  useWindowEventListener({
    eventName: 'resize',
    handler: () => {
      const translateX = -(getBookItemWidth() + itemsGap);
      booksTranslateX(`${(lineIndexRef.current * translateX) / 10}rem`);
    },
  });

  useEffect(() => {
    const containerNode = containerRef.current;
    const options = { passive: true };

    // Helpers //////////

    const getTotalWidth = () => {
      const totalGap = (itemsLength - 1) * itemsGap;
      return itemsLength * getBookItemWidth() + totalGap;
    };

    const lineTranslateX = translateX =>
      (document.querySelector(
        `.${lineProgressClassName}`
      ).style.transform = `translateX(${translateX})`);

    // Handlers //////////

    const mouseDownHandler = event => {
      isReadyToDragRef.current = true;
      startClientXRef.current = event.clientX ?? event.touches[0].clientX;
    };

    const mouseMoveHandler = event => {
      if (!isReadyToDragRef.current) return;

      // Handle items //////////

      newClientXRef.current = event.clientX ?? event.touches[0].clientX;

      const translateXTemp =
        translateXRef.current +
        (newClientXRef.current - startClientXRef.current);

      booksTranslateX(`${translateXTemp / 10}rem`);

      // Handle line //////////

      const line = document.querySelector(`.${lineClassName}`);
      const lineWidth = line.getBoundingClientRect().width;

      if (translateXTemp > 0) return;
      if (Math.abs(translateXTemp) > getTotalWidth() - getBookItemWidth())
        return;

      const lineTranslateXValue =
        (Math.abs(translateXTemp) / getTotalWidth()) * lineWidth;

      lineTranslateX(`${lineTranslateXValue / 10}rem`);
    };

    const adjustTranslateX = () => {
      const bookItemWidth = getBookItemWidth();
      const totalWidth = getTotalWidth();

      if (translateXRef.current > 0) return 0;

      if (translateXRef.current < -totalWidth + bookItemWidth)
        return -totalWidth + bookItemWidth;

      const translateXBasedOnOneItem = Math.abs(
        translateXRef.current % (bookItemWidth + itemsGap)
      );

      return translateXBasedOnOneItem <= bookItemWidth / 2
        ? translateXRef.current + translateXBasedOnOneItem
        : translateXRef.current -
            (bookItemWidth - translateXBasedOnOneItem) -
            itemsGap;
    };

    const mouseUpHandler = () => {
      if (!isReadyToDragRef.current) return;

      // Handle items //////////

      isReadyToDragRef.current = false;
      translateXRef.current += newClientXRef.current - startClientXRef.current;
      translateXRef.current = adjustTranslateX();

      booksTranslateX(`${translateXRef.current / 10}rem`);

      // Handle line //////////

      const lineIndex =
        (Math.round((Math.abs(translateXRef.current) / getTotalWidth()) * 100) /
          100) *
        itemsLength;

      lineIndexRef.current = Math.round(lineIndex);

      lineTranslateX(`${lineIndexRef.current * 100}%`);
    };

    containerNode.addEventListener('mousedown', mouseDownHandler);
    containerNode.addEventListener('touchstart', mouseDownHandler, options);
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('touchmove', mouseMoveHandler, options);
    document.addEventListener('mouseup', mouseUpHandler);
    document.addEventListener('touchend', mouseUpHandler, options);

    return () => {
      containerNode.removeEventListener('mousedown', mouseDownHandler);
      containerNode.removeEventListener(
        'touchstart',
        mouseDownHandler,
        options
      );
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('touchmove', mouseMoveHandler, options);
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('touchend', mouseUpHandler, options);
    };
  }, [
    itemsClassName,
    itemsLength,
    itemsGap,
    lineClassName,
    lineProgressClassName,
    getBookItemWidth,
    booksTranslateX,
  ]);

  return { containerRef };
}

export default useDragItems;
