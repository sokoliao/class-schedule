export const FormWrapper: React.FC<{}> = (props) => {
  return (
    <div className="h-100 container d-flex justify-content-center align-items-center">
      <div className="border">{props.children}</div>
    </div>
  );
};
