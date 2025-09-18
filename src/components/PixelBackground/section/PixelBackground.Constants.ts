export const ANIMATION = {
  initial: {
    opacity: 0,
  },
  open: (delay: number[]) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.05 * delay[1] },
  }),
  closed: (delay: number[]) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.04 * delay[0] },
  }),
};
