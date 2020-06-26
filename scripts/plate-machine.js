//get script from multi-lib
const multiLib=require("multi-lib/wrapper");
//you can use GenericSmelter                                                    ▼this has to be same with .json file name
const multi=multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"plate-machine",{
// you can customize here ex) draw(tile)
},
{
  _output:[
  [[["additionaltech"+"-"+"copper-plate",1]],null,null],
  [[["additionaltech"+"-"+"lead-plate",1]],null,null],
  [[["additionaltech"+"-"+"iron-plate",1]],null,null]
  ],
  _input:[
  [[["copper",1]],null,null],
  [[["lead",1]],null,null],
  [[["additionaltech"+"-"+"iron",1]],null,null]
  ],
  craftTimes:[60,60,60],
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
  //
});
/*true: enable displaying inventory
false:disable displaying inventory*/
multi.enableInv=false;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
multi.dumpToggle=false;

/*
YOU MUST NOT MODIFY VALUE OF
THESE
configurable=true;
outputsPower=true;
hasItems=true;
hasLiquids=true;
hasPower=true;
*/
//using this without json. not recommanded because can cause error.
multi.localizedName="multi";
multi.description="multi";
multi.itemCapacity= 30;
multi.liquidCapacity= 20;
multi.size= 4;
multi.health= 100;
multi.craftEffect= Fx.pulverizeMedium;
multi.updateEffect=Fx.none;

multi.requirements(Category.crafting,ItemStack.with(Items.copper,75));