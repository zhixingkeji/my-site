## 第1章 pytorch 简介

### 1.1 pytorch 概念

PyTorch是一个基于Torch的Python开源机器学习库，用于自然语言处理等应用程序。

它主要由Facebookd的人工智能小组开发，不仅能够 实现强大的GPU加速，同时还支持动态神经网络，这一点是现在很多主流框架如TensorFlow都不支持的。

 PyTorch提供了两个高级功能：  具有强大的GPU加速的张量计算（如Numpy）  包含自动求导系统的深度神经网络

TensorFlow和Caffe都是命令式的编程语言，而且是静态的，首先必须构建一个神经网络，然后一次又一次使用相同的结构，如果想要改 变网络的结构，就必须从头开始。但是对于PyTorch，通过反向求导技术，可以让你零延迟地任意改变神经网络的行为，而且其实现速度 快。正是这一灵活性是PyTorch对比TensorFlow的最大优势。

目前PyTorch还不支持快速傅里 叶、沿维翻转张量和检查无穷与非数值张量；针对移动端、嵌入式部署以及高性能服务器端的部署其性能表现有待提升；其次因为这个框 架较新，使得他的社区没有那么强大，在文档方面其C库大多数没有文档。





### 1.2 专业术语

正向传播 ：正向传播：沿着从输入层到输出层的顺序，依次计算并存储[神经网络]的中间变量。



反向传播：沿着从输出层到输入层的顺序，依次计算并存储神经网络的中间变量和参数的梯度。

 

梯度下降： 水平向左滑,也就是让x减小,此时随着x减小,导数(梯度)的绝对值是减小的(也就是*梯度下降*)。



FCNN 全链接神经网络

RNN 循环神经网络  

CNN 卷积神经网络 





监督学习：利用一组已知类别的样本调整分类器的参数，使其达到所要求性能的过程



 半监督学习：其训练数据的一部分是有标签的,另一部分没有标签,而没标签数据的数量常常极大于有标签数据数量



 无监督学习 ：本质上是一种统计手段(也可以理解为一种分类手段)，它没有明确目的的训练方式，你无法提前知道结果是什么，因此无须打标签。



加强学习 （强化学习）： 强化学习是智能体（Agent）以“试错”的方式进行学习，通过与环境进行交互获得的奖赏指导行为，目标是使智能体获得最大的奖赏。



迁移学习：是一种机器学习方法，就是把为任务 A 开发的模型作为初始点，重新使用在为任务 B 开发模型的过程中。



计算机视觉 

推荐算法 

自然语言处理

对抗网络GAN



机器学习的两个方向：回归问题（连续的） 和 分类问题（离散的）

线性回归问题使用 均方误差 解决预测问题

逻辑回归问题使用 sigmod激活函数 tanh激活函数   解决二分类问题  多分类问题





拟合 ：曲线是否能很好的描述这个样本

过拟合： 样本集上表现极好，但测试集表现差

欠拟合：样本集上就表现差





## 第2章 pytorch 张量

### 2.1 Tensor张量概念

张量是基于向量和矩阵的推广, 是支持高效科学计算的数组

张量的使用和`Numpy`中的`ndarrays`很类似, 但张量可以在`GPU`上加速运行



标量(Scalar) : 只有大小没有方向的量, 零阶张量

向量(Vector) : 有大小和方向的量 , 一阶张量

矩阵(Matrix) : 多个向量组成的, 二阶张量



### 2.2 张量初始化

1.直接生成张量

```python
data = [[1, 2], [3, 4]]
t_data = torch.tensor(data)
t_data = torch.FloatTensor(data)  # dtype = float32
t_data = torch.LongTensor(data)  # dtype = int64
```



2.通过Numpy数组来生成张量

```python
np_array = np.array(data)
x_np = torch.from_numpy(np_array)
```



3.通过已有的张量来生成新的张量

```python
x_ones = torch.ones_like(x_data)   # 保留 x_data 的属性
x_rand = torch.rand_like(x_data, dtype=torch.float)   # 重写 x_data 的数据类型
```



4.通过指定数据维度来生成张量

```python
shape = (2,3,)
rand_tensor = torch.rand(shape)
ones_tensor = torch.ones(shape)
zeros_tensor = torch.zeros(shape)
```



### 2.3 张量属性

```python
tensor = torch.rand(3,4)

print(f"{tensor.shape}")  # 维数
print(f"{tensor.dtype}") # 数据类型
print(f"{tensor.device}") # 存储设备
```



### 2.4 张量运算

有超过100种张量相关的运算操作, 例如转置、索引、切片、数学运算、线性代数、随机采样等。



判断当前环境GPU是否可用 , 然后将tensor导入GPU内运行

```python
if torch.cuda.is_available():
	tensor = tensor.to('cuda')
```



**1. 张量的索引和切片**

```python
tensor = torch.ones(4, 4)
tensor[:,1] = 0            # 将第1列(从0开始)的数据全部赋值为0
print(tensor)
```



**2. 张量的拼接**

```python
t1 = torch.cat([tensor, tensor, tensor], dim=1)
print(t1)
```



**3. 张量的乘积和矩阵乘法**

张量的乘积

```python
# 逐个元素相乘结果
print(f"tensor.mul(tensor): \n {tensor.mul(tensor)} \n")
# 等价写法:
print(f"tensor * tensor: \n {tensor * tensor}")
```



张量的矩阵乘法

```python
print(f"tensor.matmul(tensor.T): \n {tensor.matmul(tensor.T)} \n")
# 等价写法:
print(f"tensor @ tensor.T: \n {tensor @ tensor.T}")
```



**4. 自动赋值运算**

自动赋值运算通常在方法后有 `_` 作为后缀, 例如: `x.copy_(y)`, `x.t_()`操作会改变 `x` 的取值。

```python
print(tensor, "\n")
tensor.add_(5)
print(tensor)
```





### 2.5 张量和numpy转化

 **1. 由张量变换为Numpy array数组**

```python
t = torch.ones(5)
print(f"t: {t}")
n = t.numpy()
print(f"n: {n}")
```



**2. 由Numpy array数组转为张量**

```python
n = np.ones(5)
t = torch.from_numpy(n)
```





## 第3章 搭建nn网络







## 第4章 构建大规模并行训练复杂任务

### 4.1 模型训练的步骤

预处理数据 创建模型和优化方法

模型调用 计算损失

梯度归零 计算梯度

优化模型 打印指标





## 第5章 高级技巧扩展pytorch



## 第6章 是一个完整的实战项目讲解



