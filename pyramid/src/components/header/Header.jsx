import s from "./header.module.css";

export default function Header() {
  return (
    <div className={s.header}>
      <h1> Hi </h1>

      <button className={`${s.btn_hover} ${s.color_5}`}>BUTTON</button>
    </div>
  );
}
