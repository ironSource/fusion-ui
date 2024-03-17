export const HoverVerticalLine = {
    id: 'hoverVerticalLine',
    beforeDraw: chart => {
        if (chart.getActiveElements().length) {
            const activePoint = chart.getActiveElements()[0];
            const chartArea = chart.chartArea;
            const ctx = chart.ctx;
            ctx.save();
            // grey vertical hover line - full chart height
            ctx.beginPath();
            ctx.moveTo(activePoint.element.x, chartArea.top);
            ctx.lineTo(activePoint.element.x, chartArea.bottom);
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(0,0,0, 0.1)';
            ctx.stroke();
            ctx.restore();
        }
    }
};
