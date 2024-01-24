async function main() {
    try {
        const results = await getData();
        const elem = document.getElementById("result");
        console.log(results); // コンソールログを追加
        results.forEach(result => {
            let li = document.createElement('li');
            let text = document.createTextNode(`${result.family_name} ${result.first_name}`);
            li.appendChild(text);
            elem.appendChild(li);
        });
    } catch (error) {
        console.error(error);
    }
}

main();