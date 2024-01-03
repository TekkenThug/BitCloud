export const formatPrice = (number: number) => {
    return number.toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

export const formatPercent = (number: number) => {
    return number < 0 ? `${number}%` : `+${number}%`;
};