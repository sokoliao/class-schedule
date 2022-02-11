export const Content: React.FC<{}> = (props) => {
  return (
    <section
      className="vh-100 vw-100"
      style={{
        paddingTop: "3rem",
      }}
    >
      <div className="container-fluid h-100 overflow-auto">
        {props.children}
      </div>
    </section>
  );
};
