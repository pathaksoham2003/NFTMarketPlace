import React from "react";

const Banner = () => {
  return (
    <div className="w-full sm:h-[280px] md:h-[320px] h-[250px]">
      <div className="relative z-10 bg-gradient-to-t from-[#9747FF] sm:h-[280px] md:h-[320px] w-full overflow-visible h-[250px]">
        <img
          className="object-cover object-center w-full h-full mix-blend-overlay"
          src="https://s3-alpha-sig.figma.com/img/b2f4/c9b6/7d032bf6bdce767947a59acb6afb7b99?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yrm4~On5J8DBVX~IpQgPC2ut8R26Z7ta8cIEHcwLk~-wwNwCtXfzlohNmJ3ekYkIZxyrOiDN7Ax74DiAbJS1-l6TPN5Jq~d09K4Vz~u1I1A7r72rseba7HNF9m687lscEwoSDpY5oj3COFbHwEvaFQvxaoUQb402s8O0pe3I42PXJ-2YqflY2aZ1ImB4syHJ5zb5z35xUngMUiHZqEPvohn80ZdttV~lGuIP2sjONpZ30wfMd6EVP2A5D2JFcBRlV~g8cczqyXf-DRyt7luVAcNymVCuIg6ZfaAgKlG0hv2MC5DGdDb3GhJsGiTfUhWknHVD34vUsl0eMpWIQLXXXw__"
        />
        <div className="absolute bottom-0 left-20 -mb-[60px] w-[120px] h-[120px] aspect-square flex items-center rounded-lg justify-center overflow-visible">
          <img
            className="w-full h-full rounded-3xl border-2 border-primary"
            src="https://s3-alpha-sig.figma.com/img/9113/13b2/d79c0afb936279fe8427b823bc6218b6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SrrlVIcpz54kqCcTXJ4zCMEkWWvAeFLM64nFsumCi7SyNgYuloOPNz~pxi1Urpi3-dMpIJO4cN2T645tGDC3YABKXe3NcionSnJzJTad0e3ldgz79dOeqIUMDX3z9mcr4GFbqTfo7rhU-gWVltd8wCkHCrxnA0CTT2ppZA1E0PFthLVYlVxxVwoOJYI3v0sfN0zxmhm8aJVUvCZBTMs1S5m9qQGuyniAMicFzq5MR8ppLFaDiuW~VCccRC4wmGRPX8bus4feYsr-x1r6oGxNLGK62YP5jjgKmsiQVtofyaDJCbHU7Sl8F7PQkPKGdvOBnTzpENvsQl9jZlic-N7xMA__"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
