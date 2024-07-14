import css from "./loaderStyle.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <div className={css.spinner} />
    </div>
  );
};

export default Loader;
