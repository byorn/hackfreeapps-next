import axios from 'axios';

interface MyProps {
  repos: any[],
  token: string | string[]
}

const MyRepos = (props: MyProps) => {

  const assignPR = (hooks_url:string) => {

    let payload = {
      "name": "web",
      "active": true,
      "events": [
        "push",
        "pull_request"
      ],
      "config": {
        "url": "https://www.hackfreeapps.org/url",
        "content_type": "json",
        "insecure_ssl": "0"
      }
    }

    axios.post(hooks_url, payload ,
      {
        headers: {
          'Authorization': `token ${props.token}`
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

  }



  let jsx = props.repos.map(element => <div key={element.id}>{element.full_name}<button onClick={() => assignPR(element.hooks_url)}>Assign Pull Request</button></div>);

  return <div>{jsx}</div>
}

export default MyRepos;