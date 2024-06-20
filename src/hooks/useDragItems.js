import { useEffect, useRef } from 'react';

function useDragItems({ itemsClassName, itemsLength, itemsGap }) {
  const containerRef = useRef(null);
  const isReadyToDragRef = useRef(false);
  const startClientXRef = useRef(null);
  const newClientXRef = useRef(null);
  const translateXRef = useRef(0);

  useEffect(() => {
    const containerNode = containerRef.current;
    const options = { passive: true };

    const mouseDownHandler = event => {
      isReadyToDragRef.current = true;
      startClientXRef.current = event.clientX ?? event.touches[0].clientX;
    };

    const mouseMoveHandler = event => {
      if (!isReadyToDragRef.current) return;

      newClientXRef.current = event.clientX ?? event.touches[0].clientX;

      const diff =
        translateXRef.current +
        (newClientXRef.current - startClientXRef.current);

      document
        .querySelectorAll(`.${itemsClassName}`)
        .forEach(
          book => (book.style.transform = `translateX(${diff / 10}rem)`)
        );
    };

    const adjustTranslateX = () => {
      const bookItem = document.querySelector(`.${itemsClassName}`);
      const bookItemWidth = bookItem.getBoundingClientRect().width;
      const gap = itemsGap;
      const totalGap = (itemsLength - 1) * gap;
      const totalWidth = itemsLength * bookItemWidth + totalGap;

      if (translateXRef.current > 0) return 0;

      if (translateXRef.current < -totalWidth + bookItemWidth)
        return -totalWidth + bookItemWidth;

      const translateXBasedOnOneItem = Math.abs(
        translateXRef.current % (bookItemWidth + gap)
      );

      return translateXBasedOnOneItem <= bookItemWidth / 2
        ? translateXRef.current + translateXBasedOnOneItem
        : translateXRef.current -
            (bookItemWidth - translateXBasedOnOneItem) -
            gap;
    };

    const mouseUpHandler = () => {
      if (!isReadyToDragRef.current) return;

      isReadyToDragRef.current = false;
      translateXRef.current += newClientXRef.current - startClientXRef.current;

      translateXRef.current = adjustTranslateX();

      document
        .querySelectorAll(`.${itemsClassName}`)
        .forEach(
          book =>
            (book.style.transform = `translateX(${
              translateXRef.current / 10
            }rem)`)
        );
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
  }, [itemsClassName, itemsLength, itemsGap]);

  return { containerRef };
}

export default useDragItems;
