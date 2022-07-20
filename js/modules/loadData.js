const loadData = async () => {
    const result = await fetch('../../data.json');
    const data = await result.json();
    return data;
};

export default loadData;
