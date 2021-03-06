---
id: pmm
title: 主动做市商算法
sidebar_label: 主动做市商算法
---

## PMM: 一个通用性的流动性框架

一个有效的市场包含巨量信息，这些信息承载了市场对价格的判断。但是链上计算资源有限，在链上实现一个高度灵活的市场，就好像要把大象塞进冰箱。把大象塞冰箱这种事情并不罕见，互联网历史上已经有过几次壮举。例如图像压缩，音频压缩。

压缩的本质是提取最重要的特征，抛弃不重要的细节信息。那么，一个市场最重要的特征是什么，是流动性。流动性可以表示为一张深度图。

![](https://dodoex.github.io/cn/img/pmm_1.png)

从下图我们看到，深度图可以抽象为两个三角形，而描述这两个三角形，只需要中间价和斜率即可。

![](https://dodoex.github.io/cn/img/pmm_2.png)

我们盯住右边的卖盘梯形深度，它的最大特点是，被买走的Base Token越多，价格越高。因此，这种线性深度可以表示为

$$P = i + ik(\frac{B_0-B}{B_0})$$

其中 i 是第一个参数 "中间价"，k是第二个参数 "斜率", B表示当前的Base Token库存，B0表示初始Base Token库存，(B0-B)/B0用来表示有百分之多少的BaseToken被消耗掉了。

这一公式可以使得价格随着Base Token被卖出的数量线性增长。

但是，线性真的是描述流动性最好的方法吗？并不是，线性描述有两个局限：

1. 真正的市场，大部分流动性集中市场中间价附近，而线性描述并没有反应这种不平衡的分布；
2. 即使价格远远偏离市场中间价，也应该有流动性，而线性描述下的价格是有上下限的

我们为价格曲线引入了非线性。在不扩充参数的前提下，使深度分布更符合市场规律，灵活度更高。

![](https://dodoex.github.io/cn/img/pmm_3.png)

最简单的非线性解决方案，就是使用乘法而非加法

$$P = i(\frac{B_0}{B})$$

这个公式可以满足随着B的减小，P不断增大，直至无穷大。但是要怎么把斜率的影响加进去呢？这就需要对B0/B这一项做改造了。B0/B≥1，我们用一个参数对其进行缩放，在保持此数值大于等于1的同时，可以控制它"大于1的程度"。

$$P = i(1-k + k\frac{B_0}{B})$$

上式中，k的取值范围是[0,1]，决定了价格的斜率。

- 当k=0时，价格完全不变
- 当k=1时，价格斜率退化到上一个版本的公式
- k越大，价格变化越敏感。k越小，价格变化越不敏感

但是还有一个小问题，这里的P是边际价格，对边际价格的积分才是用户需要支付的资产数量。上式中，B0/B这项积分后出现了对数函数，这会使后续计算变得很复杂。为了避免这一麻烦，我们再进一步：

$$P = i(1-k + k(\frac{B_0}{B})^2)$$

在B0/B外面加一个平方项，这样积分后就变成了一个简单的除法。

令人惊叹的是，当k=1时，这条曲线正是AMM所定义的bonding curve。这种巧合使我们相信，这是一套更加触及市场本质的算法。

同理，对于左半边的深度图，我们用对称的做法，将base token替换为quote token，将乘法替换为除法：

$$P=i/(1-k+(\frac{Q_0}{Q})^2k)$$

我们将左右两边的深度图结合起来，就得到了PMM算法的完全版本，整理一下：

PMM 的价格曲线对应的公式为:

$$P_{margin}=iR$$

$R$ 是由以下公式确定:

$$如果 B<B_0, 则 R=1-k+(\frac{B_0}{B})^2k$$

$$如果 Q<Q_0, 则 R=1/(1-k+(\frac{Q_0}{Q})^2k)$$

$$其他情况 R=1$$

PMM算法是对Orderbook市场的高度压缩，参数简单，却极度灵活。这使得我们在冰箱如此狭小的空间内，拥有了堪比大象的能力。

## 案例

下面介绍，通过调整参数和充提规则，这套算法可以实现哪些案例

### 案例1： 跟随外部市场价格的主动做市

这一案例适用于拥有巨大外部市场的主流币，例如ETH BTC等

PMM可以实现主动调整盘口价格，减少无偿损失。获得比AMM更高的资金利用率，并且持有单币种就能提供流动性。

设置如下：

- 将价格i设置为外部市场价格
- 将k设置为小于1的数字
- 允许任何人单边充提

这一案例对应我们DODO V1的经典池


### 案例2：轻资本需求的自动做市算法

这一案例适用于没有主观定价能力的长尾币市场，将定价权完全交给市场交易者。

通常来讲，长尾币都是新资产，在AMM框架下没有足够的卖盘流动性，因而导致其流动性长期匮乏。而PMM可以很好的解决。

设置如下：

- 将价格i设置成起始发行价
- 任意设置k
- 第一笔充值可以以任意资产比例，且不改变市场价
- 后续充值（或提现）必须按照当前资产比例同时操作两种资产

这一案例我们称之为 [DODO V2 公有池](./publicPool)

### 案例3：完全自由的做市算法

这一案例为那些雄心勃勃，想要大展拳脚的做市商准备。（做市商也可以是项目方或个人）

在这个案例下，资金池的全部资金都归做市商所有。所有参数都可以调整，做市商可以根据他的判断为资产灵活定价。同时做市商可以任意充提单一币种，而不影响市场价格。

例如：

- 在ETH=1800USDT附近做市，使用很小的k获得非常有竞争力的流动性，并赚取大量手续费。当察觉到ETH有上涨预期时，撤出ETH库存以减少单边风险。但这一操作并不削弱买盘流动性。
- 新资产发行项目方只提供代币而不提供资金。在1$开始销售代币。为了让更多人以合理价格买到代币，设置了较小的k，使得代币上涨温和。随后项目方发现需要使用资金，则可以直接提出资金池中的资产，而不损害卖盘流动性，即用户仍然可以买到大量廉价代币。

设置如下：

- 只有做市商能充提，允许单币种操作

这一案例我们称之为 [DODO V2 私有池](./privatePool)

### 案例4：流动性众筹

我们可以将新资产发行分为两阶段：

1. 不开启现货交易，所有参与发售的人都以相同的价格获得代币
2. 以上一阶段的结束价格开启现货交易，使用上一阶段剩余的代币和资产建立DODO V2 公有池

这一案例我们称之为 [DODO V2 众筹池](./crowdPooling)

### 案例5：退化为AMM

设置如下：

- 设置k=1
- 必须按照当前价格比例同时充提两种资产

算法表现即和AMM相同

### 案例6：稳定币交易

设置如下：

- i=1
- k=0.001（这个值越小，越接近稳定币刚性兑换）

算法表现可以与curve相同，并且更灵活，可以比curve更接近刚性兑换，或更接近AMM