async function editFormHandler(event) {
  event.preventDefault();

  function getValue(id) {
    return document.getElementById(id).value;
  }

  const description = getValue("description-body");

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      post_id: id,
      description: description
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert(response.statusText);
  }
}

document.getElementById("edit-post-form").addEventListener("submit", editFormHandler);
