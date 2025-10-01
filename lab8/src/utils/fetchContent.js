const fetchContent = async (labNumber) => {
    return fetch(`/data/lab/${labNumber}/content.json`)
    .then(res => {
        if (!res.ok) {
            throw new Error(`Ошибка загрузки: ${res.status}`);
        }
        return res.json();
    });
}