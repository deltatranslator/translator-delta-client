const useGetMonth = (dateString) => {
    const [year, month] = dateString.split('-');
    const date = new Date(year, month - 1);
    const monthName = date.toLocaleString('default', { month: 'long' });
    return monthName;
}

export default useGetMonth;