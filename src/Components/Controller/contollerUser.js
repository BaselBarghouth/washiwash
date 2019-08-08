export class crudUser {
  getUsers = async () => {
    let token = localStorage.getItem("token");
    const req = await fetch("http://localhost:8000/api/v1/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const res = await req.json();
    console.log("=======>", res.data);
  };
}
