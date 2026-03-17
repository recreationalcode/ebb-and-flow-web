import classNames from '../utils/classNames';

const base =
  'inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

const variants = {
  primary:
    'shadow-sm px-4 py-2 bg-purple-500 text-base font-medium text-white hover:bg-purple-400 active:bg-purple-300 drop-shadow focus-visible:ring-purple-300',
  fab: 'shadow-sm px-12 py-3 bg-purple-500 text-lg font-medium text-white hover:bg-purple-400 active:bg-purple-300 drop-shadow focus-visible:ring-purple-300',
  ghost:
    'px-3 py-1.5 text-sm font-light tracking-wide focus-visible:ring-offset-0',
  card: 'bg-gray-100 rounded-2xl px-5 py-5 shadow-md text-sm font-medium text-blue-500 hover:bg-blue-400 hover:text-white active:bg-blue-500 active:text-white uppercase tracking-widest focus-visible:ring-blue-300',
  secondary:
    'shadow-sm px-3 py-1.5 rounded-md bg-gray-100 text-sm font-medium text-blue-500 hover:bg-blue-400 hover:text-white active:bg-blue-500 active:text-white focus-visible:ring-blue-300',
};

const ghostColors = {
  blue: 'text-blue-300 hover:text-white hover:bg-blue-400/20 active:bg-blue-300/40 focus-visible:ring-blue-300',
  purple:
    'text-purple-300 hover:text-white hover:bg-purple-400/20 active:bg-purple-300/40 focus-visible:ring-purple-300',
  gray: 'text-gray-500 hover:text-gray-800 hover:bg-gray-300/40 active:bg-gray-300/60 focus-visible:ring-gray-400',
};

const ghostActiveColors = {
  blue: '!text-white !bg-blue-400/50 font-normal',
  purple: '!text-white !bg-purple-400/50 font-normal',
  gray: '!text-gray-800 !bg-gray-300/50 font-normal',
};

export default function Button({
  variant = 'primary',
  ghostOn = 'blue',
  ghostText,
  active,
  className,
  href,
  children,
  ...rest
}) {
  const Tag = href ? 'a' : 'button';
  const isGhost = variant === 'ghost';
  return (
    <Tag
      href={href}
      className={classNames(
        base,
        variants[variant],
        isGhost && ghostColors[ghostOn],
        isGhost && ghostText,
        isGhost && active && ghostActiveColors[ghostOn],
        className,
      )}
      {...rest}>
      {children}
    </Tag>
  );
}
