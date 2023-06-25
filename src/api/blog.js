import req from './req';

export async function getblog(page = 1, limit = 10, categoryid = -1) {
    return await req.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid,
        }
    })
}

export async function getblogtypes(page = 1, limit = 10, categoryid = -1) {
    return await req.get("/api/blogtype");
}

export async function getblogs(id) {
    return await req.get(`/api/blog/${id}`);
}

export async function postcomment(commentinfo) {
    return await req.post(`/api/comment`,commentinfo);
}

export async function postcomments(blogid,page=1,limit=10) {
    return await req.get(`/api/comment`,{
        params:{
            blogid,
            page,
            limit,
        }
    });
}