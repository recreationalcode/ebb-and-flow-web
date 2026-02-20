import classNames from '../utils/classNames';

const base = 'inline-flex items-center justify-center rounded-md transition-colors';

const variants = {
  primary:
    'shadow-sm px-4 py-2 bg-purple text-base font-medium text-gray-light hover:bg-gray-light hover:text-purple active:bg-white drop-shadow',
  ghost:
    'px-3 py-1.5 text-sm font-light tracking-wide',
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
        variant === 'ghost' && !active && 'text-blue-light hover:text-white hover:bg-white/10',
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
