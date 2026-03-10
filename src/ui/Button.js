import classNames from '../utils/classNames';

const base =
  'inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

const variants = {
  primary:
    'shadow-sm px-4 py-2 bg-purple text-base font-medium text-white hover:bg-purple-400 active:bg-purple-300 drop-shadow focus-visible:ring-purple-300',
  ghost:
    'px-3 py-1.5 text-sm font-light tracking-wide focus-visible:ring-blue-300 focus-visible:ring-offset-0',
  card: 'bg-gray-100 rounded-2xl px-5 py-5 shadow-md hover:bg-blue-400 active:bg-blue-500 text-sm font-medium text-blue hover:text-white active:text-white uppercase tracking-widest focus-visible:ring-blue-300',
};

export default function Button({
  variant = 'primary',
  active,
  className,
  href,
  children,
  ...rest
}) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      className={classNames(
        base,
        variants[variant],
        variant === 'ghost' && active && 'text-white bg-white/20 font-normal',
        variant === 'ghost' &&
          !active &&
          'text-blue-300 hover:text-white hover:bg-white/10',
        className,
      )}
      {...rest}>
      {children}
    </Tag>
  );
}
