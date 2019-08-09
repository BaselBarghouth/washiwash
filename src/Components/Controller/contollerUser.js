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
    return res.data;
  };
  /*                 Create User                                             */
  createUsers = async params => {
    let { first_name, last_name, middle_name, email, password, roles } = params;
    let token = localStorage.getItem("token");
    let body = {
      first_name: first_name,
      last_name: last_name,
      middle_name: middle_name,
      email: email,
      password: password,
      roles: roles
    };
    const req = await fetch("http://localhost:8000/api/v1/users", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    const res = await req.json();
    return res.data;
  };
}
