import { type IconProps, generateClassesForIcon } from "./Icon";

/**
 * IconNetworkAvax
 * @usage <IconNetworkAvax />
 */
export const IconNetworkAvax = (props: IconProps) => {
  return (
    <svg
      className={generateClassesForIcon(props)}
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_576_3141)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM17.7351 12.3118C17.3194 11.5937 16.6485 11.5937 16.2328 12.3118L13.5966 16.8567C13.1903 17.5748 13.5304 18.1606 14.3525 18.1606H19.5682C20.3997 18.1606 20.7399 17.5748 20.3241 16.8567L17.7351 12.3118ZM12.7178 3.56217C12.3021 2.84406 11.6407 2.84406 11.2249 3.56217L3.6753 16.8567C3.25955 17.5842 3.59971 18.1606 4.43121 18.1606H8.22018C8.98554 18.1133 9.6753 17.707 10.0911 17.0645L14.6548 9.15587C14.9855 8.47555 14.9855 7.6724 14.6548 6.99209L13.2942 4.60154L12.7178 3.56217Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_576_3141">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
