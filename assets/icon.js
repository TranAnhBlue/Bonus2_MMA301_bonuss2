import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";
import { Image } from "react-native";

export function NavGoldIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h22v22H0z" />
        </ClipPath>
      </Defs>
      <Path
        fill="#969696"
        d="M0 11a11 11 0 1122 0 11 11 0 11-22 0"
        clipPath="url(#a)"
      />
      <Path
        fill="#969696"
        d="M2.1999999999999993 11a8.8 8.8 0 1117.6 0 8.8 8.8 0 11-17.6 0"
        stroke="#000"
        strokeOpacity={0}
      />
      <Path
        d="M2.6999999999999993 11a8.3 8.3 0 1116.6 0 8.3 8.3 0 11-16.6 0"
        fillOpacity={0}
        stroke="#fff"
      />
      <Path
        fill="#fafafa"
        d="M11 7.333a1.1 1.1 0 011.1 1.1v5.133a1.1 1.1 0 01-1.1 1.1 1.1 1.1 0 01-1.1-1.1V8.433a1.1 1.1 0 011.1-1.1z"
      />
    </Svg>
  );
}
export function NavGoldActiveIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h32v32H0z" />
        </ClipPath>
      </Defs>
      <Path
        fill="#185ece"
        d="M32 16A16 16 0 1116 0a16 16 0 0116 16z"
        clipPath="url(#a)"
      />
      <Path
        fill="#fff"
        d="M6 16a10 10 0 1120 0 10 10 0 11-20 0"
        fillOpacity={0.5}
        strokeOpacity={0.5}
      />
      <Path fill="#fff" d="M8 16a8 8 0 1116 0 8 8 0 11-16 0" />
      <Path
        fill="#185ece"
        d="M16 12a1 1 0 011 1v6a1 1 0 01-1 1 1 1 0 01-1-1v-6a1 1 0 011-1z"
      />
    </Svg>
  );
}
export function NavProfileIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      viewBox="0 0 19 19"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h19v19H0z" />
        </ClipPath>
      </Defs>
      <G fillOpacity={0.4}>
        <Path
          d="M15.842 12.543a12 12 0 00-12.56 0 2.459 2.459 0 00-1.123 2.074v3.521h14.805v-3.521a2.46 2.46 0 00-1.122-2.074z"
          clipPath="url(#a)"
        />
        <Path d="M12.615 2.129a4.318 4.318 0 11-6.107 0 4.318 4.318 0 016.107 0" />
      </G>
    </Svg>
  );
}
export function NavProfileActiveIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M6.5 6h15v15h-15z" />
        </ClipPath>
      </Defs>
      <Path
        fill="#185ece"
        d="M0 14a14 14 0 1128 0 14 14 0 11-28 0"
        stroke="#000"
        strokeOpacity={0}
        strokeWidth={1}
      />
      <Path
        fill="#000"
        d="M.5 14a13.5 13.5 0 1127 0 13.5 13.5 0 11-27 0"
        fillOpacity={0}
        stroke="#fafafa"
        strokeWidth={1}
      />
      <G fill="#fff">
        <Path
          d="M19.005 15.902a9.472 9.472 0 00-9.916 0 1.942 1.942 0 00-.884 1.637v2.781h11.688v-2.779a1.942 1.942 0 00-.888-1.639z"
          clipPath="url(#a)"
        />
        <Path d="M16.459 7.681a3.409 3.409 0 11-4.821 0 3.409 3.409 0 014.821 0" />
      </G>
    </Svg>
  );
}
export function NavAllAppsIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={23}
      viewBox="0 0 23 23"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h23v23H0z" />
        </ClipPath>
      </Defs>
      <G fill="#8b8b8b">
        <Path d="M11.439 14.936h5.932v1.049h-5.932zm0 0" clipPath="url(#a)" />
        <Path d="M20.093 4.399H2.602a.583.583 0 00-.583.583v14.1a.583.583 0 00.583.583h17.49a.583.583 0 00.584-.583v-14.1a.583.583 0 00-.583-.583zm-9.82 12.583V13.79a.583.583 0 01.584-.583h7.1a.583.583 0 01.583.583v3.191a.583.583 0 01-.583.583h-7.1a.583.583 0 01-.583-.583zm0 0M11.12 3.234l-.1-.552a.583.583 0 00-.571-.482H3.864a.583.583 0 00-.577.481l-.1.552zm0 0" />
      </G>
    </Svg>
  );
}
export function NavAllAppsActiveIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M6.458 5.895h14.824v14.824H6.458z" />
        </ClipPath>
      </Defs>
      <Path
        fill="#185ece"
        d="M0 14a14 14 0 1128 0 14 14 0 11-28 0"
        stroke="#000"
        strokeOpacity={0}
        strokeWidth={1}
      />
      <Path
        fill="#000"
        d="M.5 14a13.5 13.5 0 1127 0 13.5 13.5 0 11-27 0"
        fillOpacity={0}
        stroke="#fafafa"
        strokeWidth={1}
      />
      <G fill="#fff">
        <Path d="M13.981 15.82h3.916v.692h-3.916zm0 0" clipPath="url(#a)" />
        <Path d="M19.694 8.865H8.148a.385.385 0 00-.385.384v9.309a.385.385 0 00.385.385h11.546a.385.385 0 00.385-.385V9.249a.385.385 0 00-.385-.384zm-6.482 8.306v-2.106a.385.385 0 01.385-.385h4.685a.385.385 0 01.385.385v2.106a.385.385 0 01-.385.385h-4.685a.385.385 0 01-.385-.385zm0 0M13.771 8.095l-.065-.364a.385.385 0 00-.374-.318H8.981a.385.385 0 00-.379.318l-.064.365zm0 0" />
      </G>
    </Svg>
  );
}
export function NavGameIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
      <Path
        d="M2.881 20.056c1.064 0 2.325-.79 3.856-2.416a4.761 4.761 0 013.415-1.492h3.694a4.761 4.761 0 013.415 1.492c1.531 1.626 2.792 2.416 3.856 2.416a1.741 1.741 0 001.605-1.132 5.353 5.353 0 00.392-2.2c0-3.776-2.443-11.04-6.183-11.04a3.275 3.275 0 00-2.122.677 3.229 3.229 0 01-1.4.6c-.768.044-1.675.021-1.675.021h-1.005a3.226 3.226 0 01-1.539-.625 3.275 3.275 0 00-2.122-.677C3.327 5.684.881 12.947.881 16.723c0 3.007 1.4 3.332 2 3.332zm14.329-6.557a.651.651 0 11.651-.651.651.651 0 01-.651.651zm1.3-2.605a.651.651 0 11-.651.651.651.651 0 01.654-.656zm-1.3-1.3a.651.651 0 11-.651.651.651.651 0 01.651-.656zm-1.3 1.3a.651.651 0 11-.651.651.651.651 0 01.648-.656zm-5.21 0h2.605a.651.651 0 110 1.3h-2.608a.651.651 0 010-1.3zm-5.21 0h.651v-.651a.651.651 0 111.3 0v.646h.651a.651.651 0 010 1.3H7.44v.651a.651.651 0 11-1.3 0v-.651h-.653a.651.651 0 110-1.3z"
        fillOpacity={0.4}
        clipPath="url(#a)"
      />
    </Svg>
  );
}
export function NavGameActiveIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M5 4h18v18H5z" />
        </ClipPath>
      </Defs>
      <Path
        fill="#185ece"
        d="M0 14a14 14 0 1128 0 14 14 0 11-28 0"
        stroke="#000"
        strokeOpacity={0}
        strokeWidth={1}
      />
      <Path
        fill="#000"
        d="M.5 14a13.5 13.5 0 1127 0 13.5 13.5 0 11-27 0"
        fillOpacity={0}
        stroke="#fafafa"
        strokeWidth={1}
      />
      <Path
        fill="#fff"
        d="M7.16 19.042c.8 0 1.744-.592 2.892-1.812a3.571 3.571 0 012.561-1.119h2.772a3.571 3.571 0 012.561 1.119c1.148 1.219 2.094 1.812 2.892 1.812a1.305 1.305 0 001.2-.849 4.015 4.015 0 00.294-1.651c0-2.832-1.832-8.28-4.637-8.28a2.456 2.456 0 00-1.592.508 2.421 2.421 0 01-1.043.454c-.576.033-1.256.015-1.256.015h-.757a2.419 2.419 0 01-1.155-.471 2.456 2.456 0 00-1.592-.505c-2.805 0-4.64 5.447-4.64 8.279 0 2.255 1.051 2.5 1.5 2.5zm10.746-4.917a.488.488 0 11.488-.488.488.488 0 01-.487.487zm.977-1.954a.488.488 0 11-.488.488.488.488 0 01.489-.491zm-.977-.977a.488.488 0 11-.488.488.488.488 0 01.489-.489zm-.977.977a.488.488 0 11-.488.488.488.488 0 01.489-.491zm-3.908 0h1.956a.488.488 0 110 .977h-1.954a.488.488 0 010-.977zm-3.908 0h.488v-.488a.488.488 0 11.977 0v.485h.488a.488.488 0 010 .977h-.486v.488a.488.488 0 01-.977 0v-.488h-.488a.488.488 0 110-.977z"
        clipPath="url(#a)"
      />
    </Svg>
  );
}
export function NavHomeIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h22v22H0z" />
        </ClipPath>
      </Defs>
      <Path
        d="M17.705 20.582H4.292a1.917 1.917 0 01-1.917-1.913V8.822A3.435 3.435 0 013.391 6.51l6.252-4.568a2.017 2.017 0 012.714 0l6.251 4.568a3.436 3.436 0 011.016 2.312v9.847a1.919 1.919 0 01-1.919 1.913zm-8-10.182a.5.5 0 00-.5.5v4.99a.5.5 0 00.5.5h2.592a.5.5 0 00.5-.5v-4.989a.5.5 0 00-.5-.5z"
        fillOpacity={0.4}
        clipPath="url(#a)"
      />
    </Svg>
  );
}
export function NavHomeActiveIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M6 5h16v16H6z" />
        </ClipPath>
      </Defs>
      <Path
        fill="#185ece"
        d="M0 14a14 14 0 1128 0 14 14 0 11-28 0"
        stroke="#000"
        strokeOpacity={0}
        strokeWidth={1}
      />
      <Path
        fill="#000"
        d="M.5 14a13.5 13.5 0 1127 0 13.5 13.5 0 11-27 0"
        fillOpacity={0}
        stroke="#fafafa"
        strokeWidth={1}
      />
      <Path
        fill="#fff"
        d="M18.876 19.969H9.121a1.4 1.4 0 01-1.394-1.392v-7.161a2.5 2.5 0 01.739-1.686l4.547-3.318a1.467 1.467 0 011.974 0l4.546 3.318a2.5 2.5 0 01.739 1.682v7.161a1.4 1.4 0 01-1.396 1.396zm-5.683-7.405a.5.5 0 00-.5.5v3.356a.5.5 0 00.5.5h1.613a.5.5 0 00.5-.5v-3.356a.5.5 0 00-.5-.5z"
        clipPath="url(#a)"
      />
    </Svg>
  );
}

//My Profile Icons
export function MyProfileIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
      <Path
        fill="#185ece"
        d="M16.673 13.202a12.63 12.63 0 00-13.221 0 2.589 2.589 0 00-1.179 2.183v3.706h15.584v-3.706a2.59 2.59 0 00-1.184-2.183z"
        clipPath="url(#a)"
      />
      <Path
        fill="#185ece"
        d="M13.279 2.24a4.545 4.545 0 11-6.428 0 4.545 4.545 0 016.428 0"
      />
    </Svg>
  );
}
export function SettingsIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
      <Path
        fill="#185ece"
        d="M9.991 18.884a9.16 9.16 0 01-1.024-.059.962.962 0 01-.848-1.008 1.37 1.37 0 00-.834-1.34 1.443 1.443 0 00-1.538.356.963.963 0 01-1.312.1 8.937 8.937 0 01-1.406-1.422.96.96 0 01.1-1.3 1.376 1.376 0 00.356-1.527 1.347 1.347 0 00-1.26-.848h-.018a1.035 1.035 0 01-1.038-.844 8.937 8.937 0 010-2.021.947.947 0 01.979-.848 1.458 1.458 0 001.369-.834 1.365 1.365 0 00-.356-1.538.963.963 0 01-.092-1.321 8.692 8.692 0 011.438-1.421.965.965 0 011.3.108 1.447 1.447 0 001.527.356 1.376 1.376 0 00.844-1.319.962.962 0 01.853-.99 8.756 8.756 0 012 .007.958.958 0 01.848 1 1.374 1.374 0 00.834 1.34 1.442 1.442 0 001.538-.356.96.96 0 011.312-.1 8.82 8.82 0 011.41 1.422.965.965 0 01-.1 1.3 1.362 1.362 0 00.937 2.371 1.032 1.032 0 011.027.851 8.937 8.937 0 010 2.021.965.965 0 01-1.01.85h-.087a1.362 1.362 0 00-.91 2.375.963.963 0 01.108 1.308 8.825 8.825 0 01-1.438 1.422.956.956 0 01-1.3-.108 1.452 1.452 0 00-1.53-.356 1.372 1.372 0 00-.844 1.315.96.96 0 01-.853.987 9.243 9.243 0 01-.981.06zm.025-5.58a3.292 3.292 0 113.29-3.291 3.292 3.292 0 01-3.29 3.29zm0-5.6a2.311 2.311 0 102.308 2.312 2.311 2.311 0 00-2.308-2.313z"
        clipPath="url(#a)"
      />
      <Path
        fill="#fff"
        d="M10.016 13.303a3.292 3.292 0 113.29-3.291 3.292 3.292 0 01-3.29 3.291zm0-5.6a2.311 2.311 0 102.308 2.313 2.311 2.311 0 00-2.308-2.313z"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </Svg>
  );
}
export function SupportIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
      <Path
        fill="#185ece"
        d="M12.401 13.147a3.958 3.958 0 01-4.8 0l-3.583 3.579a9 9 0 0011.96 0z"
        clipPath="url(#a)"
      />
      <Path
        fill="#185ece"
        d="M16.726 4.019l-3.579 3.579a3.958 3.958 0 010 4.8l3.579 3.579a9 9 0 000-11.96z"
      />
      <Path
        fill="#185ece"
        d="M10 1a8.934 8.934 0 00-5.984 2.274l3.579 3.579a3.958 3.958 0 014.8 0l3.579-3.579A8.934 8.934 0 0010 1z"
      />
      <Path
        fill="#185ece"
        d="M6.853 7.599L3.274 4.018a9 9 0 000 11.96l3.579-3.579a3.958 3.958 0 010-4.8z"
      />
    </Svg>
  );
}
export function FaqIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
      <Path
        fill="#185ece"
        d="M10 1a9 9 0 109 9 9.01 9.01 0 00-9-9zm0 14.25a.75.75 0 11.75-.75.75.75 0 01-.75.75zm1.187-4.769a.753.753 0 00-.437.682v.337a.75.75 0 11-1.5 0v-.337a2.26 2.26 0 011.309-2.044 2.451 2.451 0 001.316-1.744 1.875 1.875 0 10-3.75 0 .75.75 0 01-1.5 0 3.375 3.375 0 016.75 0 3.908 3.908 0 01-2.188 3.107z"
        clipPath="url(#a)"
      />
    </Svg>
  );
}
export function AdminIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
      <Path
        fill="#185ece"
        d="M12.418 19.129l-.203-.117-.41.176a1.729 1.729 0 01-2.176-.727l-.703-1.219a1.733 1.733 0 01.461-2.25l.355-.265v-.118-.117l-.355-.265a1.738 1.738 0 01-.461-2.25l.703-1.219c.211-.363.543-.637.937-.77a7.404 7.404 0 00-3.101-.672A7.462 7.462 0 000 16.777v2.164C0 19.527.473 20 1.059 20h11.519a1.74 1.74 0 01-.109-.43l-.051-.441z"
        clipPath="url(#a)"
      />
      <Path
        fill="#185ece"
        d="M7.465 8.195A4.097 4.097 0 107.466 0a4.097 4.097 0 00-.001 8.195z"
      />
      <Path
        fill="#185ece"
        d="M19.746 15.867l-.84-.629c.067-.414.067-.84 0-1.254l.84-.628a.638.638 0 00.168-.829l-.703-1.218a.633.633 0 00-.801-.266l-.965.41a4.11 4.11 0 00-1.086-.629l-.125-1.043a.634.634 0 00-.633-.558h-1.41a.64.64 0 00-.632.558l-.125 1.043a4.048 4.048 0 00-1.086.629l-.965-.41a.638.638 0 00-.801.266l-.703 1.218a.64.64 0 00.168.829l.84.628c-.067.414-.067.84 0 1.254l-.84.629a.639.639 0 00-.168.828l.703 1.219a.64.64 0 00.801.27l.965-.414a4.08 4.08 0 001.086.628l.125 1.043a.633.633 0 00.632.559h1.41a.64.64 0 00.633-.559l.125-1.043a4.08 4.08 0 001.086-.628l.965.41a.636.636 0 00.801-.27l.703-1.219a.634.634 0 00-.168-.824zm-4.852.266a1.526 1.526 0 01-1.523-1.524c0-.84.684-1.523 1.523-1.523.84 0 1.524.683 1.524 1.523 0 .84-.684 1.524-1.524 1.524z"
      />
    </Svg>
  );
}
export function LogoutIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
      <Path
        fill="#185ece"
        d="M15.729 12.086a.558.558 0 010-.8l1.851-1.847h-5.768a.563.563 0 010-1.126h5.768l-1.851-1.855a.562.562 0 01.8-.794l2.809 2.812a.564.564 0 010 .795l-2.814 2.813a.56.56 0 01-.4.167.567.567 0 01-.395-.165z"
        clipPath="url(#a)"
      />
      <Path
        fill="#185ece"
        d="M7.5 19a1.546 1.546 0 01-.465-.07l-4.514-1.5A1.514 1.514 0 011.5 16V2.5A1.5 1.5 0 013 1a1.547 1.547 0 01.465.07l4.513 1.5A1.514 1.514 0 019 4v13.5A1.5 1.5 0 017.5 19z"
      />
      <Path
        fill="#185ece"
        d="M12.938 6a.563.563 0 01-.562-.562V3.062a.939.939 0 00-.937-.938H3A.562.562 0 113 .999h8.438A2.064 2.064 0 0113.5 3.062v2.375a.563.563 0 01-.562.563zm0 0"
      />
      <Path
        fill="#185ece"
        d="M11.438 16.75h-3a.562.562 0 110-1.125h3a.939.939 0 00.937-.938V12.31a.563.563 0 111.125 0v2.375a2.064 2.064 0 01-2.062 2.065zm0 0"
      />
    </Svg>
  );
}

// All App Icons
// approve now icon
export function ApproveNowIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/approve.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}

//reward icon
export function RewardIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/reward.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}

// discipline icon
export function DisciplineIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/discipline.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}

// learning icon
export function LearningIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/learning.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}

//My task icon
export function MyTaskIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/mytask.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}

//Fpt care
export function FptCareIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/fptcare.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}

//event
export function EventIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/event.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}

//survey
export function SurveyIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/survey.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}

//dating
export function DatingIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/fptdating.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}

//payslip
export function PayslipIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/payslip.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}

//birthday icon
export function BirthdayIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/birthday.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}

//news
export function NewsIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/news.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}

//Star ave
export function StaraveIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/starave.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}

// Employee Info
export function EmployeeInfoIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/employeeinfo.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}
// Game
export function GameIcon({ size = 25, style, ...props }) {
  return (
    <Image
      source={require("../assets/images/game.png")}
      style={[{ width: size, height: size, resizeMode: "contain" }, style]}
      {...props}
    />
  );
}
