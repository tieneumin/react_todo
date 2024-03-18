export default function Button(props) {
  const { classAddition = "primary", label } = props;
  return <button className={"btn btn-" + classAddition}>{label}</button>;
}

/*
<button class="btn btn-sm btn-danger">
<i class="bi bi-trash"></i>
</button>
<button class="btn btn-sm btn-light">
<i class="bi bi-square"></i>
</button> 
<button class="btn btn-sm btn-primary rounded ms-2">Add</button>\
*/
