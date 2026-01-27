const sessionListStr: string | null = localStorage.getItem('sessionList');

if (sessionListStr === null)
{
    const msg: HTMLDivElement = document.createElement('div');
    msg.textContent = 'There has been no visit to the index.html page yet';
    document.body.appendChild(msg);
}
else
{
    const sessionList: string[] = JSON.parse(sessionListStr);

    if (sessionList.length === 0)
    {
        const msg: HTMLDivElement = document.createElement('div');
        msg.textContent = 'There has been no visit to the index.html page yet';
        document.body.appendChild(msg);
    }
    else
    {
        for (const session of sessionList)
        {
            const div: HTMLDivElement = document.createElement('div');
            div.textContent = new Date(session).toLocaleString();
            document.body.appendChild(div);
        }
    }
}




