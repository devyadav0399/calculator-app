interface ButtonProps {
  name: string,
  alt?: boolean,
  clickHandler: (name: string) => void,
}