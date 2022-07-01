import React, { FC, useRef, useEffect, useState } from 'react';

import { Props, LineStyle, TextStyle } from './_types';

const Ruler: FC<Props> = (props: Props) => {
  const {
    backgroundColor = '#000',
    min = 0,
    max = 500,
    zoom = 1,
    horizontal = true,
  } = props;
  const { height = 30, width = 500 } = props;
  let canvasHeight = height,
    canvasWidth = width;
  if (!horizontal) {
    [canvasWidth, canvasHeight] = [canvasHeight, canvasWidth];
  }
  const { scaleLineStyle = {}, textStyle = {} } = props;
  const {
    color: lineColor = '#FFF',
    width: lineWidth = 1,
    shortLength = canvasHeight * 0.3,
    mediumLength = canvasHeight * 0.5,
    longLength = canvasHeight * 1,
  }: LineStyle = scaleLineStyle;
  const {
    color: textColor = '#FFF',
    size: textSize = 12,
    align: textAlign = 'left',
    baseLine: textBaseLine = 'middle',
    top: textTop = canvasHeight * 0.5,
    left: textLeft = 6,
  }: TextStyle = textStyle;

  const [hover, setHover] = useState(false);
  const ruler = useRef<HTMLCanvasElement | null>(null);

  const init = () => {
    if (!ruler.current) {
      return;
    }
    const canvas = ruler.current;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    //模糊问题 https://stackoverflow.com/questions/40066166/canvas-text-rendering-blurry
    const zoom = window.devicePixelRatio;
    canvas.width = width * zoom;
    canvas.height = height * zoom;
    const ctx = ruler.current.getContext('2d');
    if (!ctx) {
      return;
    }
    ctx.scale(zoom, zoom);
    drawRuler(ctx);
    drawRulerLine(ctx);
  };

  const drawRuler = (ctx: CanvasRenderingContext2D) => {
    //清空画布
    ctx.clearRect(0, 0, width, height);
    if (!horizontal) {
      ctx.translate(width, 0);
      ctx.rotate((Math.PI / 180) * 90);
    }
    //背景填充
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  // 标尺中每小格代表的宽度(根据scale的不同实时变化)
  const getGridSize = (scale: number = 1) => {
    if (scale <= 0.25) return 40;
    if (scale <= 0.5) return 20;
    if (scale <= 1) return 10;
    if (scale <= 2) return 5;
    if (scale <= 4) return 2;
    return 1;
  };

  const drawRulerLine = (ctx: CanvasRenderingContext2D) => {
    let smallScaleValue = getGridSize(zoom); // 一个小刻度的宽度
    let scaleValue = smallScaleValue * 10; // 一个大刻度宽度
    let r_width = scaleValue * zoom;
    let i = 0;
    let text = [];
    let start = 0;
    if (min < 0) {
      start = -Math.ceil(Math.abs(min) / scaleValue) * scaleValue;
      let surplus = -((Math.abs(start) - Math.abs(min)) * zoom);
      ctx.translate(surplus, 0);
    }
    do {
      let x = (i * r_width) / 10;
      let mx = x;
      let my = height;
      if (!horizontal) {
        my = 0;
      }

      let lx = mx;
      let ly = height - shortLength; //短线(最小刻度)y坐标
      if (!horizontal) {
        ly = shortLength;
      }
      let txt = start + i * smallScaleValue;
      if (i % 10 === 0) {
        ly = height - longLength; //长线(最大刻度)y坐标
        let t = {
          x: mx + textLeft,
          y: textTop,
          val: txt.toString(),
        };
        if (!horizontal) {
          ly = longLength;
          // [t.x, t.y] = [t.y, t.x];
        }

        text.push(t);
      } else if (i % 5 === 0) {
        ly = height - mediumLength; //中线(最大刻度)y坐标
        if (!horizontal) {
          ly = mediumLength;
        }
      }
      drawLine(ctx, mx, my, lx, ly);
      i++;
    } while (i <= max);
    text.forEach(item => {
      drawTxt(ctx, item.val, item.x, item.y);
    });
  };

  const drawLine = (
    ctx: CanvasRenderingContext2D,
    startX: number,
    startY: number,
    endX: number,
    endY: number
  ) => {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(startX + 0.5, startY + 0.5);
    ctx.lineTo(endX + 0.5, endY + 0.5);
    ctx.stroke();
    ctx.closePath();
  };

  const drawTxt = (
    ctx: CanvasRenderingContext2D,
    txt: string,
    x: number,
    y: number
  ) => {
    //添加数字文本
    ctx.beginPath();
    ctx.font = `${textSize}px Arial`;
    ctx.fillStyle = textColor;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseLine;
    ctx.fillText(txt, x, y);
    ctx.closePath();
  };

  const mouseOver = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  const mouseMove = (ev: HTMLElementEventMap['mousemove']) => {
    if (hover) {
      props.onHover && props?.onHover(ev);
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (!ruler.current) return;
    ruler.current.addEventListener('mouseover', mouseOver);
    ruler.current.addEventListener('mouseout', mouseOut);
    ruler.current.addEventListener('mousemove', mouseMove);
    return () => {
      if (!ruler.current) return;
      ruler.current.removeEventListener('mouseover', mouseOver);
      ruler.current.removeEventListener('mouseout', mouseOut);
      ruler.current.removeEventListener('mousemove', mouseMove);
    };
  }, [hover]);

  return (
    <canvas ref={ruler}>
      Your browser does not support the HTML5 canvas tag.
    </canvas>
  );
};
export default Ruler;
