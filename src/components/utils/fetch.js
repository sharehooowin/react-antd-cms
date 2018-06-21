/**
 * create by xhw.
 */

//非简单请求用例

// get请求
export let getFetch = async (url) => {

    //添加请求头
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: headers

        });
        let json = await response.json();
        return json;
    } catch (err) {
        console.log(err);
        return {
            code:1040,
            msg:"数据加载失败"
        }
    }
};

// post请求
export let postFetch = async (url, body) => {

    //添加请求头
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    try {
        let response = await fetch(url, {
            method: 'POST',
            mode:'cors',
            headers: headers,
            body:JSON.stringify(body)
        });
        let json = await response.json();
        return json;
    } catch (err) {
        console.log(err);
        return {
            code:1040,
            msg:"数据提交失败"
        }
    }
};

//put请求
export let putFetch = async (url,body) => {

    //添加请求头
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    try {
        let response = await fetch(url, {
            method:'PUT',
            headers:headers,
            mode:'cors',
            body:JSON.stringify(body)
        });
        let json = await response.json();
        return json;
    } catch(err){
        console.log(err);
        return {
            code:1040,
            msg:"数据修改失败"
        }
    }
};

//patch请求
export let patchFetch = async (url,body) => {

    //添加请求头
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    try {
        let response = await fetch(url, {
            method:'PATCH',
            headers:headers,
            mode:'cors',
            body:JSON.stringify(body)
        });
        let json = await response.json();
        return json;
    } catch(err){
        console.log(err);
        return {
            code:1040,
            msg:"数据修改失败"
        }
    }
};

//delete请求
export let deleteFetch = async (url) => {

    //添加请求头
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    try {
        let response = await fetch(url, {
            method:'DELETE',
            headers:headers
        });
        let json = await response.json();
        return json;
    } catch(err){
        console.log(err);
        return {
            code:1040,
            msg:"数据删除失败"
        }
    }
};