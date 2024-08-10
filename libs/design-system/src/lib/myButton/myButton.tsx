// import stylex from '@stylexjs/stylex';
// import { Button, ButtonProps } from 'react-aria-components';

// export type MyButtonProps = ButtonProps


// const styles = stylex.create({
//   root: {
//     width: '100%',
//     maxWidth: 800,
//     minHeight: 40,
//     background: "red"
//   },
// });

// export function MyButton(props: MyButtonProps) {
export function MyButton(props: any) {
  return (
    <button {...props} />
    // <Button {...props} {...stylex.props(styles.root)} />
  );
}

export default MyButton;
