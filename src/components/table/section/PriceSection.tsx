/* eslint-disable @typescript-eslint/no-explicit-any */
// Custom cell renderer for price
export const PriceRenderer = (props: any) => {
    const currency = props?.currency ||
        "INR"; // get from grid context
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency,
        // minimumFractionDigits: 0
    });
    const value = props.value;
    const style = {
        color: value > 50000 ? 'red' : 'black',
        fontWeight: value > 50000 ? 'bold' : 'normal'
    };
    return <span style={style}>{formatter.format(value)}</span>;
};