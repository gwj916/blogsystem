import req from './req'
export async function getbanner(){
  return await req.get("/api/banner");
}
