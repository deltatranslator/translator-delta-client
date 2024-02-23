import countries from "../data/countries";

const useTraceLangName = () => {
    return (code) => {
        const countryName = countries.find(country => country.code === code);
        return countryName?.name;
    };
};

export default useTraceLangName;